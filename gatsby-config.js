/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Severi Kupari`,
    author: {
      name: `Severi Kupari`,
    },
    description: ``,

    /* Choose and arrange the sections to be displayed on the landing page */
    sections: [
      `hero`,
      `features`,
      `testimonials`,
      `pricing`,
      // `call-to-action`,
      // `screenshots`,
      // `subscribe`
    ],

    /* Configure the navigation menu */
    menuItems: [
      {path: 'features', label: 'Palvelut'},
      {path: 'pricing', label: 'Hinnasto'},
      // {path: 'screenshots', label: 'Screenshots'},
      {path: 'testimonials', label: 'Referenssit'},
      // {path: 'subscribe', label: 'Subscribe'},
    ],

    /* Provide social media accounts. Remove or add new services. (The value 'fa' is the name of FontAwesome icon to display. Choose from here: https://fontawesome.com/cheatsheet/free/brands ) */
    social: [
      { service: `GitHub`,
        url : `https://github.com/severikupari1`,
        fa: `github` },
    ],

    /* Path to favicon and logo (located inside the 'static' folder) */
    favicon: `favicon.png`,
    logo: `/images/logo.svg`,

    /* Logo and text to show in footer */
    footer: {
      logo: `/images/logo.svg`,
      text: `Severi Kupari logo`,
      socialHeader: `Sosiaalinen media`,
      contactHeader: `Yhteystiedot`
    },

    /* Address and contact info to show in footer */
    address: {
      header: `Sijainti`,
      line1: `Kuopio`,
      line2: ``,
      line3: ``,
    },
    contacts: [
      { text: `647.343.8234`, url: `tel:6473438234` },
      { text: `123.456.7890`, url: `tel:1234567890`},
      { text: `someone@woosite.com`, url: `mailto:someone@woo.com`},
    ],
  },
  plugins: [ `gatsby-plugin-anchor-links`, `gatsby-plugin-smoothscroll`, `react-scrollspy` ],
}
