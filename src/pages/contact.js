/** @jsx jsx */
import { jsx, Label, Input, Box, Button, Textarea } from 'theme-ui';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const Contact = () => {
  const { title: siteTitle } = useSiteMetadata();

  const pageDescription =
    'Contact me for company websites, blogs, portfolios, or other website ideas you might have and I will help you bring your vision into reality. Full scope.';

  return (
    <Layout title={siteTitle} description={pageDescription}>
      <Sidebar isIndex />
      <Page>
        <h2 sx={{ marginTop: 0, color: 'text' }}>Contact Me</h2>
        <Box
          as="form"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
        >
          <Label htmlFor="name">Name</Label>
          <Input name="name" mb={3} />
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" mb={3} />
          <Label htmlFor="comment">Comment</Label>
          <Textarea name="comment" rows="6" mb={3} />
          <Button type="submit">Submit</Button>
        </Box>
      </Page>
    </Layout>
  );
};

export default Contact;