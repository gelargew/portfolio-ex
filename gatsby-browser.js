const React = require("react")

// Wraps every page in a component
export function wrapPageElement({ element, props }) {
    const Layout = element.type.Layout ?? React.Fragment
    return <Layout {...props}>{element}</Layout>
}