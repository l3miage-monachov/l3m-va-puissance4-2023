export const dataTests = {"userMail":"vivian.monachon@etu.univ-grenoble-alpes.fr","version":27,"mutants":[],"suites":[{"label":"Tests play","LtestIds":["Kgy2THKx01NY8KP4SoZI","OqlVklNWBfZWAQmMFeSE","nqzoJ5fpagLMKHVWrDu4"],"id":"ckY52fAfrv8yJZ1wNxQ0","tests":[{"op":"play","id":"Kgy2THKx01NY8KP4SoZI","comment":"no such column","expect":{"success":false,"reason":"no such column"},"params":[{"grid":[[],[],[],[],[],[],[]],"turn":"P1"},8]},{"params":[{"grid":[["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[],[],[]],"turn":"P1"},1],"comment":"column is full","op":"play","id":"OqlVklNWBfZWAQmMFeSE","expect":{"reason":"column is full","success":false}},{"op":"play","params":[{"grid":[["P1","P2"],[],[],[],[],[],[]],"turn":"P1"},1],"comment":"is playable","expect":{"success":true,"state":{"grid":[["P1","P2","P1"],[],[],[],[],[],[]],"turn":"P2"}},"id":"nqzoJ5fpagLMKHVWrDu4"}]},{"id":"swtTHHlPFA28IGUpWRea","label":"Tests isValid état intial de jeu","LtestIds":["W0xDFJDwL6bEoMLboE2p","EMNUzLrGfxkv9AVJuuyq","vVlZPg7dT1aKbYNj4w75","ImOnFuNeXt1i90k6I0Ca"],"tests":[{"comment":"too much token for P1","id":"W0xDFJDwL6bEoMLboE2p","params":[{"grid":[["P1","P1"],[],[],[],[],[],[]],"turn":"P1"}],"op":"isValid","expect":{"reason":"too much token for P1","valid":false}},{"expect":{"valid":true},"id":"EMNUzLrGfxkv9AVJuuyq","params":[{"grid":[[],[],[],[],[],[],[]],"turn":"P1"}],"comment":"empty table","op":"isValid"},{"op":"isValid","params":[{"grid":[["P1","P2"],["P1","P2"],["P1","P2"],["P1","P2"],[],[],[]],"turn":"P1"}],"expect":{"reason":"There cannot be two winners","valid":false},"comment":"two winners","id":"vVlZPg7dT1aKbYNj4w75"},{"comment":"too many tokens in a column","params":[{"grid":[["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[],[],[]],"turn":"P1"}],"expect":{"valid":false,"reason":"column 1 has too much tokens"},"id":"ImOnFuNeXt1i90k6I0Ca","op":"isValid"}]},{"label":"Tests winner","LtestIds":["046IukhwOzlnZ6QfFoLd","5vAgrm1idgaULSypCvYi","Y372t3U7YorLDYY44w13","pasoS9TdZtLjJ5H7PaEn","sFBphdTjebRjy3CJ84DV"],"id":"upu6JXWpkTXL71IXWSBH","tests":[{"id":"046IukhwOzlnZ6QfFoLd","op":"winner","expect":"P1","comment":"P1 is winner diagonal","params":[{"grid":[["P1"],["P2","P1"],["P2","P1","P1"],["P2","P2","P2","P1"],["P1"],[],[]],"turn":"P1"}]},{"expect":"P1","id":"5vAgrm1idgaULSypCvYi","op":"winner","params":[{"grid":[["P1","P1","P1","P1"],["P2","P2","P2"],[],[],[],[],[]],"turn":"P1"}],"comment":"P1 winner column"},{"params":[{"grid":[["P1","P2"],["P1","P2"],["P1","P2"],["P1"],[],[],[]],"turn":"P1"}],"id":"Y372t3U7YorLDYY44w13","op":"winner","expect":"P1","comment":"P1 winner line"},{"op":"winner","id":"pasoS9TdZtLjJ5H7PaEn","expect":"DRAW","params":[{"grid":[["P1","P1","P1","P2","P2","P2"],["P2","P2","P2","P1","P1","P1"],["P1","P1","P1","P2","P2","P2"],["P2","P2","P2","P1","P1","P1"],["P1","P1","P1","P2","P2","P2"],["P2","P2","P2","P1","P1","P1"],["P1","P2","P1","P2","P1","P2"]],"turn":"P1"}],"comment":"Draw board full"},{"comment":"no winner yet","expect":"no winner yet","op":"winner","id":"sFBphdTjebRjy3CJ84DV","params":[{"grid":[[],[],[],[],[],[],[]],"turn":"P1"}]}]}],"canObserveString":"[]","canObserve":"[]","evals":[-1,{"play":[0,0],"winner":[0,0],"isValid":[0,0]},{"play":[0,0],"isValid":[0,0],"winner":[0,0]}]}