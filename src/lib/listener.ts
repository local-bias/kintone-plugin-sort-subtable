import { KintoneEventListener } from '@konomi-app/kintone-utilities';
import { PLUGIN_NAME } from './static';

export const listener = new KintoneEventListener({
  errorHandler: (error, props) => {
    const { event } = props;
    event.error = `プラグイン「${PLUGIN_NAME}」の処理内でエラーが発生しました。`;
    console.error('エラー', error);
  },
  logDisabled: process.env.NODE_ENV === 'production',
  logPrefix: `[${PLUGIN_NAME}] `,
});

process.env.NODE_ENV === 'development' &&
  console.info('[plugin] Event listener has been initialized');
