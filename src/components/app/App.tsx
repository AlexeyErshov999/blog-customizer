/** Стили */
import styles from '../../styles/index.module.scss';

/** Хуки и функции Реакт */
import { useState, CSSProperties } from 'react';

/** Константы */
import { defaultArticleState } from 'src/constants/articleProps';

/** Компоненты */
import { Article } from '../article';
import { ArticleParamsForm } from '../article-params-form';

// Вынес App в отдельный файл
export const App = () => {
	const [currentArticle, setCurrentArticle] = useState(defaultArticleState);

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': currentArticle.fontFamilyOption.value,
					'--font-size': currentArticle.fontSizeOption.value,
					'--font-color': currentArticle.fontColor.value,
					'--container-width': currentArticle.contentWidth.value,
					'--bg-color': currentArticle.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setCurrentArticle={setCurrentArticle} />
			<Article />
		</main>
	);
};
