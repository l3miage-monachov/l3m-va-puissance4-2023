export const dataTests = {"userMail":"vivian.monachon@etu.univ-grenoble-alpes.fr","version":11,"mutants":[],"suites":[{"label":"Tests isValid état intial de jeu","LtestIds":["W0xDFJDwL6bEoMLboE2p","igbfnCrX85oI4LOPbxlY","EMNUzLrGfxkv9AVJuuyq","vVlZPg7dT1aKbYNj4w75"],"id":"swtTHHlPFA28IGUpWRea","tests":[{"comment":"too much token for P1","id":"W0xDFJDwL6bEoMLboE2p","params":[{"grid":[["P1","P1"],[],[],[],[],[],[]],"turn":"P1"}],"op":"isValid","expect":{"reason":"too much token for P1","valid":false}},{"expect":{"valid":false,"reason":"too much token for P2"},"comment":"too much token for P2","op":"isValid","id":"igbfnCrX85oI4LOPbxlY","params":[{"grid":[["P2","P2"],[],[],[],[],[],[]],"turn":"P1"}]},{"expect":{"valid":true},"id":"EMNUzLrGfxkv9AVJuuyq","params":[{"grid":[[],[],[],[],[],[],[]],"turn":"P1"}],"comment":"empty table","op":"isValid"},{"op":"isValid","id":"vVlZPg7dT1aKbYNj4w75","comment":"two winners","params":[{"grid":[["P1","P2"],["P1","P2"],["P1","P2"],["P1","P2"],[],[],[]],"turn":"P1"}],"expect":{"valid":false,"reason":"There cannot be two winners"}}]}],"canObserveString":"[]","canObserve":"[]","evals":[-1,{"isValid":[0,0],"play":[0,0],"winner":[0,0]},{"isValid":[0,0],"winner":[0,0],"play":[0,0]}]}