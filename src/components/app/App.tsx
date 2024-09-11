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
	const [formInputs, setFormInputs] = useState(defaultArticleState);

	/** Функция сброса стилей формы к дефолтным */
	const resetForm = () => {
		setFormInputs(defaultArticleState);
		setCurrentArticle(defaultArticleState);
	};

	/** Функция принятия изменений формы */
	const applyFormChanges = () => {
		setCurrentArticle(formInputs);
	};

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
			<ArticleParamsForm
				state={formInputs}
				setState={setFormInputs}
				editStyle={resetForm}
				acceptStyle={applyFormChanges}
			/>
			<Article />
		</main>
	);
};
