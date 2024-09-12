import React from 'react';
import { defaultArticleState } from 'src/constants/articleProps';

export type TCloseFormHook = {
	onClose?: () => void;
	isOpened?: boolean;
	ref: React.RefObject<HTMLElement>;
};

export type TArticleParamsFormProps = {
	setCurrentArticle: React.Dispatch<
		React.SetStateAction<typeof defaultArticleState>
	>;
};
