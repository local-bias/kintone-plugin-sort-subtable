// @ts-check

const hp = 'https://konomi.app/';
const commonCdn = 'https://kintone-plugin.konomi.app/common';
const key = 'sort-subtable';

/** @satisfies { Plugin.Meta.Config } */
export default /** @type { const } */ ({
  id: `ribbit-kintone-plugin-${key}`,
  pluginReleasePageUrl: `https://ribbit.konomi.app/kintone-plugin/`,
  server: {
    port: 11335,
  },
  lint: {
    build: false,
  },
  tailwind: {
    css: 'src/styles/global.css',
    config: {
      desktop: 'tailwind.config.desktop.mjs',
      config: 'tailwind.config.config.mjs',
    },
  },
  manifest: {
    base: {
      manifest_version: 1,
      version: '1.2.0',
      type: 'APP',
      name: {
        en: 'Sort Subtable Plugin',
        ja: 'サブテーブル並び替えプラグイン',
        zh: '子表排序插件',
      },
      description: {
        en: 'Add a button to sort the rows of the subtable based on a specific column.',
        ja: 'サブテーブルの行を特定の列を基準にソートできるボタンを追加します。',
        zh: '在子表中添加一个按钮，根据特定列对行进行排序。',
      },
      icon: 'icon.png',
      homepage_url: { ja: hp, en: hp },
      desktop: { js: [`${commonCdn}/desktop.js`], css: [] },
      mobile: { js: [`${commonCdn}/desktop.js`], css: [] },
      config: {
        html: 'config.html',
        js: [`${commonCdn}/config.js`],
        css: [],
        required_params: [],
      },
    },
    prod: {
      desktop: { js: ['desktop.js'], css: ['desktop.css'] },
      mobile: { js: ['desktop.js'], css: ['desktop.css'] },
      config: { js: ['config.js'], css: ['config.css'] },
    },
    standalone: {
      desktop: { js: ['desktop.js'], css: ['desktop.css'] },
      mobile: { js: ['desktop.js'], css: ['desktop.css'] },
      config: { js: ['config.js'], css: ['config.css'] },
    },
  },
});
