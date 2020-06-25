import { shell } from "electron"

export default async function openExternalLink(link: string) {
  await shell.openExternal(link)
}
