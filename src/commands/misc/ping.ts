import type { Command } from "../../types/command"

export default <Command>{
  category: "misc",
  desc: "Ping bot",
  execute: async ({ message, arg }) => {
    return await message.reply(`pong! ${Date.now() - message.timestamps}ms ${arg}`, true)
  }
}
