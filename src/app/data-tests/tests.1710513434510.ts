export const dataTests = {"userMail":"vivian.monachon@etu.univ-grenoble-alpes.fr","version":39,"mutants":[],"suites":[{"id":"ckY52fAfrv8yJZ1wNxQ0","LtestIds":["Kgy2THKx01NY8KP4SoZI","OqlVklNWBfZWAQmMFeSE","nqzoJ5fpagLMKHVWrDu4","zfo7SJ3Mqlu9uvjDw9FR"],"label":"Tests play","tests":[{"expect":{"reason":"no such column","success":false},"id":"Kgy2THKx01NY8KP4SoZI","op":"play","comment":"no such column","params":[{"grid":[[],[],[],[],[],[],[]],"turn":"P1"},8]},{"params":[{"grid":[["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[],[],[]],"turn":"P1"},1],"comment":"column 1 is full","op":"play","expect":{"success":false,"reason":"column is full"},"id":"OqlVklNWBfZWAQmMFeSE"},{"id":"nqzoJ5fpagLMKHVWrDu4","op":"play","expect":{"state":{"grid":[["P1","P2","P1"],[],[],[],[],[],[]],"turn":"P2"},"success":true},"comment":"is playable","params":[{"grid":[["P1","P2"],[],[],[],[],[],[]],"turn":"P1"},1]},{"op":"isValid","params":[{"grid":[["P1","P2","P1","P2","P1"],["P2","P1","P2","P1","P2","P1","P2"],[],[],[],[],[]],"turn":"P1"}],"id":"zfo7SJ3Mqlu9uvjDw9FR","comment":"column has too much token","expect":{"reason":"column 2 has too much tokens","valid":false}}]},{"id":"swtTHHlPFA28IGUpWRea","label":"Tests isValid état intial de jeu","LtestIds":["W0xDFJDwL6bEoMLboE2p","EMNUzLrGfxkv9AVJuuyq","vVlZPg7dT1aKbYNj4w75","ImOnFuNeXt1i90k6I0Ca","FX7L5zP3vZB6IWRNgTzY","UWYG3yMvxHlO9S8QzmO5","Yq0hN0uf1rd1cTKMwVRQ","ae2ETbJsnaSyXfHJAnWI","Qimj4S7w3AfZAf4z7RVD"],"tests":[{"comment":"too much token for P1","params":[{"grid":[["P1","P1"],[],[],[],[],[],[]],"turn":"P1"}],"op":"isValid","id":"W0xDFJDwL6bEoMLboE2p","expect":{"reason":"too much token for P1","valid":false}},{"op":"isValid","params":[{"grid":[[],[],[],[],[],[],[]],"turn":"P1"}],"id":"EMNUzLrGfxkv9AVJuuyq","comment":"empty table","expect":{"valid":true}},{"expect":{"valid":false,"reason":"There cannot be two winners"},"op":"isValid","comment":"two winners","id":"vVlZPg7dT1aKbYNj4w75","params":[{"grid":[["P1","P2"],["P1","P2"],["P1","P2"],["P1","P2"],[],[],[]],"turn":"P1"}]},{"comment":"too many tokens in column 1\n","id":"ImOnFuNeXt1i90k6I0Ca","expect":{"reason":"column 1 has too much tokens","valid":false},"params":[{"grid":[["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[],[],[]],"turn":"P1"}],"op":"isValid"},{"comment":"too many token in column 2","op":"isValid","expect":{"reason":"column 2 has too much tokens","valid":false},"params":[{"grid":[[],["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[],[]],"turn":"P1"}],"id":"FX7L5zP3vZB6IWRNgTzY"},{"params":[{"grid":[[],[],["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[]],"turn":"P1"}],"comment":"too many tokens in column 3","id":"UWYG3yMvxHlO9S8QzmO5","op":"isValid","expect":{"valid":false,"reason":"column 3 has too much tokens"}},{"expect":{"valid":false,"reason":"column 4 has too much tokens"},"op":"isValid","id":"Yq0hN0uf1rd1cTKMwVRQ","params":[{"grid":[[],[],[],["P1","P2","P1","P2","P1","P2","P1"],[],[],[]],"turn":"P1"}],"comment":"too many tokens in column 4"},{"op":"isValid","params":[{"grid":[[],[],[],[],["P1","P2","P1","P2","P1","P2","P1"],[],[]],"turn":"P1"}],"id":"ae2ETbJsnaSyXfHJAnWI","expect":{"reason":"column 5 has too much tokens","valid":false},"comment":"too many tokens in column 5"},{"id":"Qimj4S7w3AfZAf4z7RVD","params":[{"grid":[[],[],[],[],[],["P1","P2","P1","P2","P1","P2","P1"],[]],"turn":"P1"}],"expect":{"valid":false,"reason":"column 6 has too much tokens"},"op":"isValid","comment":"too many tokens in column 6"}]},{"id":"upu6JXWpkTXL71IXWSBH","LtestIds":["046IukhwOzlnZ6QfFoLd","5vAgrm1idgaULSypCvYi","Y372t3U7YorLDYY44w13","pasoS9TdZtLjJ5H7PaEn","sFBphdTjebRjy3CJ84DV"],"label":"Tests winner","tests":[{"params":[{"grid":[["P1"],["P2","P1"],["P2","P1","P1"],["P2","P2","P2","P1"],["P1"],[],[]],"turn":"P1"}],"expect":"P1","op":"winner","comment":"P1 is winner diagonal","id":"046IukhwOzlnZ6QfFoLd"},{"expect":"P1","id":"5vAgrm1idgaULSypCvYi","comment":"P1 winner column","op":"winner","params":[{"grid":[["P1","P1","P1","P1"],["P2","P2","P2"],[],[],[],[],[]],"turn":"P1"}]},{"params":[{"grid":[["P1","P2"],["P1","P2"],["P1","P2"],["P1"],[],[],[]],"turn":"P1"}],"expect":"P1","comment":"P1 winner line","id":"Y372t3U7YorLDYY44w13","op":"winner"},{"op":"winner","comment":"Draw board full","params":[{"grid":[["P1","P1","P1","P2","P2","P2"],["P2","P2","P2","P1","P1","P1"],["P1","P1","P1","P2","P2","P2"],["P2","P2","P2","P1","P1","P1"],["P1","P1","P1","P2","P2","P2"],["P2","P2","P2","P1","P1","P1"],["P1","P2","P1","P2","P1","P2"]],"turn":"P1"}],"id":"pasoS9TdZtLjJ5H7PaEn","expect":"DRAW"},{"expect":"no winner yet","params":[{"grid":[[],[],[],[],[],[],[]],"turn":"P1"}],"id":"sFBphdTjebRjy3CJ84DV","op":"winner","comment":"no winner yet"}]}],"canObserveString":"[]","canObserve":"[]","evals":[-1,{"winner":[0,0],"play":[0,0],"isValid":[0,0]},{"isValid":[0,0],"winner":[0,0],"play":[0,0]}]}