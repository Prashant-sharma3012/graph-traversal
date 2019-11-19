# graph-traversal

// This is how the graph will look

//           a-----b------c
//           |     /\     |\
//           |   /   \    / \
//           | /      \  /   \
//            d----e---f------h

// adjacency list for the graph -
// graph = {
//   "A": ["B","D"],
//   "B": ["D", "F"],
//   "C" : ["F", "H"],
//   "D" : ["B","E"],
//   "E": ["D","F"],
//   "F": ["B", "C"],
//   "H" : ["C", "F"]
// }
// dfs - ["A", "B", "C", "F", "E", "D", "H"]
// bfs - ["A", "B", "D", "C", "F", "E", "H"]
