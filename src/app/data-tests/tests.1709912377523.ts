export const dataTests = {"userMail":"vivian.monachon@etu.univ-grenoble-alpes.fr","version":21,"mutants":[],"suites":[{"label":"Tests play","LtestIds":["Kgy2THKx01NY8KP4SoZI","OqlVklNWBfZWAQmMFeSE","nqzoJ5fpagLMKHVWrDu4"],"id":"ckY52fAfrv8yJZ1wNxQ0","tests":[{"id":"Kgy2THKx01NY8KP4SoZI","op":"play","comment":"no such column","params":[{"grid":[[],[],[],[],[],[],[]],"turn":"P1"},8],"expect":{"success":false,"reason":"no such column"}},{"expect":{"success":false,"reason":"column is full"},"comment":"column is full","params":[{"grid":[["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[],[],[]],"turn":"P1"},1],"id":"OqlVklNWBfZWAQmMFeSE","op":"play"},{"id":"nqzoJ5fpagLMKHVWrDu4","params":[{"grid":[["P1","P2"],[],[],[],[],[],[]],"turn":"P1"},1],"op":"play","comment":"is playable","expect":{"success":true,"state":{"grid":[["P1","P2","P1"],[],[],[],[],[],[]],"turn":"P2"}}}]},{"LtestIds":["W0xDFJDwL6bEoMLboE2p","EMNUzLrGfxkv9AVJuuyq","vVlZPg7dT1aKbYNj4w75","ImOnFuNeXt1i90k6I0Ca"],"id":"swtTHHlPFA28IGUpWRea","label":"Tests isValid état intial de jeu","tests":[{"op":"isValid","expect":{"valid":false,"reason":"too much token for P1"},"comment":"too much token for P1","params":[{"grid":[["P1","P1"],[],[],[],[],[],[]],"turn":"P1"}],"id":"W0xDFJDwL6bEoMLboE2p"},{"expect":{"valid":true},"op":"isValid","comment":"empty table","params":[{"grid":[[],[],[],[],[],[],[]],"turn":"P1"}],"id":"EMNUzLrGfxkv9AVJuuyq"},{"params":[{"grid":[["P1","P2"],["P1","P2"],["P1","P2"],["P1","P2"],[],[],[]],"turn":"P1"}],"comment":"two winners","id":"vVlZPg7dT1aKbYNj4w75","expect":{"valid":false,"reason":"There cannot be two winners"},"op":"isValid"},{"params":[{"grid":[["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[],[],[]],"turn":"P1"}],"op":"isValid","comment":"too many tokens in a column","id":"ImOnFuNeXt1i90k6I0Ca","expect":{"valid":false,"reason":"column 1 has too much tokens"}}]},{"id":"upu6JXWpkTXL71IXWSBH","LtestIds":["046IukhwOzlnZ6QfFoLd"],"label":"Tests winner","tests":[{"comment":"P1 is winner","id":"046IukhwOzlnZ6QfFoLd","params":[{"grid":[["P1"],["P2","P1"],["P2","P1","P1"],["P2","P2","P2","P1"],["P1"],[],[]],"turn":"P1"}],"op":"winner","expect":"P1"}]}],"canObserveString":"[]","canObserve":"[]","evals":[-1,{"play":[0,0],"winner":[0,0],"isValid":[0,0]},{"isValid":[0,0],"winner":[0,0],"play":[0,0]}]}