function pronajdiTip(vnesi) {
  let tip = typeof vnesi;
  console.log(`Tipot na ${vnesi} e ${tip}`);
}

pronajdiTip(null);
pronajdiTip(true);
pronajdiTip(2000);
pronajdiTip("Hello");
pronajdiTip(undefined);
