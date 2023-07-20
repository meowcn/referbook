import { existsSync } from 'https://deno.land/std@0.195.0/fs/mod.ts'

if (!existsSync('./dist')) Deno.mkdirSync('./dist')

const content = JSON.parse(Deno.readTextFileSync('./src/social.json'))

let table = '# 喵体中文词汇参考\n\n|中文|喵化|\n|:-:|:-:|'
for (const key in content) table += `\n|${key}|${content[key]}|`
table += '\n'

await Deno.writeTextFile('./dist/refer.md', table)
