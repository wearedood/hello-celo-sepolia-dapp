async function main() {
  const HelloCelo = await ethers.getContractFactory("HelloCelo");
  const hello = await HelloCelo.deploy();
  await hello.waitForDeployment();

  const address = await hello.getAddress();
  console.log("HelloCelo deployed to:", address);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
