// import { renderRichText } from "gatsby-source-contentful/rich-text"
// ​
// const Bold = ({ children }) => <span className="bold">{children}</span>
// const Text = ({ children }) => <p className="align-center">{children}</p>
// ​
// const options = {
//   renderMark: {
//     [MARKS.BOLD]: text => <Bold>{text}</Bold>,
//   },
//   renderNode: {
//     [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
//     [BLOCKS.EMBEDDED_ASSET]: node => {
//       return (
//         <>
//           <h2>Embedded Asset</h2>
//           <pre>
//             <code>{JSON.stringify(node, null, 2)}</code>
//           </pre>
//         </>
//       )
//     },
//   },
// }
// ​
// renderRichText(node.bodyRichText, options)
