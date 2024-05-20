CREATE OR REPLACE FUNCTION fetch_transactions(
    range_arg VARCHAR default 'last30days',
    limit_arg INT default 20,
    offset_arg INT default 0
)
RETURNS SETOF transactions AS $$
DECLARE
    startDate TIMESTAMP;
    endDate TIMESTAMP := NOW();
BEGIN
    CASE range_arg
        WHEN 'Last24hours' THEN
            startDate := NOW() - INTERVAL '24 hours';
        WHEN 'Last7days' THEN
            startDate := NOW() - INTERVAL '7 days';
        WHEN 'Last30days' THEN
            startDate := NOW() - INTERVAL '30 days';
        WHEN 'Last12months' THEN
            startDate := NOW() - INTERVAL '12 months';
        ELSE
            startDate := NOW() - INTERVAL '30 days';
    END CASE;

    RETURN QUERY SELECT * FROM transactions
    WHERE created_at BETWEEN startDate AND endDate
    ORDER BY create_at DESC
    LIMIT limit_arg OFFSET offset_arg;
END;
$$ LANGUAGE plpgsql;