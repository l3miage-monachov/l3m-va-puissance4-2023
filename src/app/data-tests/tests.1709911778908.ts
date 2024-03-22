export const dataTests = {"userMail":"vivian.monachon@etu.univ-grenoble-alpes.fr","version":12,"mutants":[],"suites":[{"LtestIds":["W0xDFJDwL6bEoMLboE2p","igbfnCrX85oI4LOPbxlY","EMNUzLrGfxkv9AVJuuyq","vVlZPg7dT1aKbYNj4w75","ImOnFuNeXt1i90k6I0Ca"],"id":"swtTHHlPFA28IGUpWRea","label":"Tests isValid état intial de jeu","tests":[{"op":"isValid","expect":{"valid":false,"reason":"too much token for P1"},"comment":"too much token for P1","params":[{"grid":[["P1","P1"],[],[],[],[],[],[]],"turn":"P1"}],"id":"W0xDFJDwL6bEoMLboE2p"},{"id":"igbfnCrX85oI4LOPbxlY","comment":"too much token for P2","expect":{"valid":false,"reason":"too much token for P2"},"params":[{"grid":[["P2","P2"],[],[],[],[],[],[]],"turn":"P1"}],"op":"isValid"},{"expect":{"valid":true},"op":"isValid","comment":"empty table","params":[{"grid":[[],[],[],[],[],[],[]],"turn":"P1"}],"id":"EMNUzLrGfxkv9AVJuuyq"},{"params":[{"grid":[["P1","P2"],["P1","P2"],["P1","P2"],["P1","P2"],[],[],[]],"turn":"P1"}],"comment":"two winners","id":"vVlZPg7dT1aKbYNj4w75","expect":{"valid":false,"reason":"There cannot be two winners"},"op":"isValid"},{"params":[{"grid":[["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[],[],[]],"turn":"P1"}],"op":"isValid","comment":"too many tokens in a column","id":"ImOnFuNeXt1i90k6I0Ca","expect":{"valid":false,"reason":"column 1 has too much tokens"}}]}],"canObserveString":"[]","canObserve":"[]","evals":[-1,{"isValid":[0,0],"winner":[0,0],"play":[0,0]},{"isValid":[0,0],"play":[0,0],"winner":[0,0]}]}