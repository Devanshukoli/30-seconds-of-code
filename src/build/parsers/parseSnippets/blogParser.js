import { red } from 'kleur';
import {
  getFilesInDir,
  getData,
  getTextualContent,
  getGitMetadata,
  getId,
  getTags
} from './standardParser';
// TODO: Consider parsing this via a new parser or similar
// The argument against is that it's a single case and might not extend to other repos in the future
import authors from '../../../../content/sources/30blog/blog_data/blog_authors';

/**
 * Synchronously read all snippets and sort them as necessary.
 * The sorting is case-insensitive.
 * @param snippetsPath The path of the snippets directory.
 * @param config The project's configuration file.
 * @param langData An array of `(language, icon)` tuples.
 */
const readSnippets = async(snippetsPath, config, langData) => {
  const snippetFilenames = getFilesInDir(snippetsPath, false);

  let snippets = {};
  let blogIcon = config.theme ? config.theme.iconName : null;
  try {
    for (let snippet of snippetFilenames) {
      let data = getData(snippetsPath, snippet);
      const tags = getTags(data.attributes.tags);
      const lowercaseTags = tags.map(t => t.toLowerCase());
      const text = getTextualContent(data.body);
      const excerpt = data.attributes.excerpt;
      const shortSliceIndex = text.indexOf('\n\n') <= 180
        ? text.indexOf('\n\n')
        : text.indexOf(' ', 160);
      const authorsData = getTags(data.attributes.authors).map(a => authors[a]);
      const langIcon = langData.find(l => lowercaseTags.includes(l.language));

      snippets[snippet] = {
        id: getId(snippet),
        title: data.attributes.title,
        type: `blog.${data.attributes.type}`,
        tags: {
          all: tags,
          primary: tags[0],
        },
        code: {},
        expertise: 'blog',
        text: {
          full: data.body,
          short: excerpt && excerpt.trim().length !== 0
            ? excerpt
            : `${text.slice(0, shortSliceIndex)}...`,
        },
        cover: data.attributes.cover,
        authors: authorsData,
        icon: langIcon ? langIcon.icon : blogIcon,
        ...await getGitMetadata(snippet, snippetsPath),
      };
    }
  } catch (err) {
    /* istanbul ignore next */
    console.log(`${red('[ERROR]')} Error while reading snippets: ${err}`);
    /* istanbul ignore next */
    process.exit(1);
  }
  return snippets;
};

export default {
  getFilesInDir,
  getData,
  getTextualContent,
  getGitMetadata,
  getId,
  getTags,
  readSnippets,
};
