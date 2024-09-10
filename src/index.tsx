/** Хуки и функции Реакт */
import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';

/** Компоненты */
import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';

/** Константы */
import { defaultArticleState } from './constants/articleProps';

/** Стили */
import clsx from 'clsx';
import './styles/index.scss';
import styles from './styles/index.module.scss';

/** Создание корневого элемента */
const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
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
			className={clsx(styles.main)}
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

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
