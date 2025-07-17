-- Create contacts table for storing contact form submissions
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(500) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for contact form)
CREATE POLICY "Allow contact form submissions" ON contacts
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow only authenticated users to read contacts
CREATE POLICY "Only authenticated users can read contacts" ON contacts
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Add email validation constraint
ALTER TABLE contacts 
ADD CONSTRAINT valid_email_format 
CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_email_domain ON contacts 
USING btree (substring(email from '@(.*)$'));

-- Create function to validate allowed email domains
CREATE OR REPLACE FUNCTION is_valid_email_domain(email_address text)
RETURNS boolean AS $$
DECLARE
  allowed_domains text[] := ARRAY[
    'gmail.com',
    'ieee.org',
    'delice.com.tn',
    'outlook.com',
    'hotmail.com',
    'yahoo.com',
    'protonmail.com'
  ];
  domain text;
  valid_extensions text[] := ARRAY['com', 'org', 'net', 'edu', 'gov', 'tn', 'fr', 'de', 'uk', 'ca', 'au'];
BEGIN
  -- Extract domain from email
  domain := substring(email_address from '@(.*)$');
  
  -- Check if domain is in allowed list
  IF domain = ANY(allowed_domains) THEN
    RETURN true;
  END IF;
  
  -- Check if domain has valid extension
  IF substring(domain from '\.([^.]+)$') = ANY(valid_extensions) THEN
    RETURN true;
  END IF;
  
  RETURN false;
END;
$$ LANGUAGE plpgsql;

-- Add constraint using the validation function
ALTER TABLE contacts 
ADD CONSTRAINT valid_email_domain 
CHECK (is_valid_email_domain(email));

-- Insert a test record to verify everything works
INSERT INTO contacts (name, email, subject, message) 
VALUES ('Test User', 'test@gmail.com', 'Test Subject', 'Test message to verify the table works correctly.');

-- Display the test record
SELECT * FROM contacts WHERE name = 'Test User';
