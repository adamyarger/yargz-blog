import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

export interface PostMetadata {
  id: string
  title: string
  published_at: string,
  subtitle: string
}

export interface PostData extends PostMetadata {
  body: string
}

const postsDirectory = path.join(process.cwd(), 'markdown/posts')

export class PostUtil {
  static getAllPostData() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map((fileName) => {
      const id = fileName.replace(/\.md$/, '')
      return this.getPostData(id, false)
    })
  }

  static getAllPostIds(): { params: { id: string } }[] {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      }
    })
  }

  static getPostData(id: string, includeContent = true): PostData {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { content, data } = matter(fileContents)

    return {
      id,
      title: data.title,
      published_at: new Date(data.published_at).toString(),
      subtitle: data.subtitle || null,
      body: includeContent && content,
    }
  }
}
