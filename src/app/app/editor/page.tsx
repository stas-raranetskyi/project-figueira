'use client';

import { withTranslationsProvider } from '@/components/TranslationsProvider';
import Editor from '@/features/editor/Editor';

const EditorPage = () => {
	return <Editor />;
};

export default withTranslationsProvider(EditorPage, []);
