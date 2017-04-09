//@flow
import Task from "data.task";
import Sum from "./sum";

const argv = new Task((rej, res) => res(process.argv))
const input = argv.map(args => args.slice(2))


const main = ([one ,two]) => {
  return Sum(Number(one),Number(two));
}

input.map(main).fork(console.err, console.log)
