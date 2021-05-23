import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

export interface PostMetadata {
  id: string
  title: string
  date: string,
  course: string
}

export interface PostData extends PostMetadata {
  mdString: string
}

const postsDirectory = path.join(process.cwd(), 'markdown/lessons')

export class PostUtil {
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

  static getPostData(id: string): PostData {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { content, data } = matter(fileContents)

    return {
      id,
      title: data.title,
      date: data.date,
      course: data.course,
      mdString: content,
    }
  }
}
