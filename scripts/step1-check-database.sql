-- Step 1: Check if the contacts table exists and is working
SELECT table_name, column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'contacts'
ORDER BY ordinal_position;

-- Check if we can insert a simple test record
INSERT INTO contacts (name, email, subject, message) 
VALUES ('Database Test', 'test@gmail.com', 'Database Connection Test', 'Testing if database insert works');

-- Verify the insert worked
SELECT * FROM contacts WHERE name = 'Database Test' ORDER BY created_at DESC LIMIT 1;
