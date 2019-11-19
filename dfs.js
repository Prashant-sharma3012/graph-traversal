// This is how the grap will look

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

class graph {

  graph = {};

  constructor() { }

  addVertex(vertex) {
    if (this.graph[vertex]) return;

    this.graph[vertex] = [];
  }

  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);

    this.graph[v1].push(v2);
    this.graph[v2].push(v1);
  }

  getGraph() {
    return this.graph;
  }

  dfs(startAt) {
    let traversal = [];
    let visited = [];

    let helper = (startAt) => {
      visited.push(startAt);
      traversal.push(startAt);

      this.graph[startAt].map(e => {
        if (!visited.includes(e)) {
          helper(e);
        }
      });

      return;
    }

    helper(startAt);

    return traversal;
  }


  bfs(startAt) {
    let visited = [];
    let toTraverse = [];

    toTraverse.push(startAt);
    visited.push(startAt);

    while (toTraverse.length > 0) {
      this.graph[toTraverse[0]].map(e => {
        if (!visited.includes(e)) {
          visited.push(e);
          toTraverse.push(e);
        }
      });

      toTraverse.splice(0, 1)
    }

    return visited;

  }


}


let g1 = new graph()

g1.addVertex("A");
g1.addVertex("B");
g1.addVertex("C");
g1.addVertex("D");
g1.addVertex("E");
g1.addVertex("F");
g1.addVertex("H");

g1.addEdge("A", "B");
g1.addEdge("A", "D");
g1.addEdge("B", "C");
g1.addEdge("B", "D");
g1.addEdge("D", "E");
g1.addEdge("E", "F");
g1.addEdge("B", "F");
g1.addEdge("F", "C");
g1.addEdge("F", "H");
g1.addEdge("C", "H");