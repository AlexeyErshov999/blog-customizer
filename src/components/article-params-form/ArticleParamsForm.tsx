/** Компоненты */
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
import { Select } from 'components/select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

/** Хуки и события */
import { FormEvent, useRef, useState } from 'react';
import { useCloseArticleParamsFrom } from './hooks/useCloseArticleParamsFrom';

/** Стили */
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';

/** Типы и константы */
import {
	OptionType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { TArticleParamsFormProps } from './hooks/types';

export const ArticleParamsForm = ({
	setCurrentArticle,
}: TArticleParamsFormProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
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

	const changeMenuVisibility = () => {
		setIsMenuOpen((prev) => !prev);
	};

	/** Универсальная функция для смены значения какого либо свойства */
	const updateState = (key: string, value: OptionType) => {
		setFormInputs((prevState) => ({ ...prevState, [key]: value }));
	};

	const handleFontFamilyChange = (value: OptionType) =>
		updateState('fontFamilyOption', value);
	const handleFontSizeChange = (value: OptionType) =>
		updateState('fontSizeOption', value);
	const handleFontColorChange = (value: OptionType) =>
		updateState('fontColor', value);
	const handleBackgroundColorChange = (value: OptionType) =>
		updateState('backgroundColor', value);
	const handleContentWidthChange = (value: OptionType) =>
		updateState('contentWidth', value);

	const formRef = useRef<HTMLFormElement | null>(null);

	useCloseArticleParamsFrom({
		isOpened: isMenuOpen,
		onClose: changeMenuVisibility,
		ref: formRef,
	});

	return (
		<>
			<ArrowButton
				onClick={() => !isMenuOpen && changeMenuVisibility()}
				isOpened={isMenuOpen}
			/>
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isMenuOpen,
				})}>
				<form
					className={styles.form}
					ref={formRef}
					onSubmit={(e: FormEvent) => {
						e.preventDefault();
						applyFormChanges();
					}}>
					<Text as={'h2'} size={31} weight={800} uppercase={true}>
						Задайте параметры
					</Text>
					<Select
						selected={formInputs.fontFamilyOption}
						options={fontFamilyOptions}
						placeholder='Выберите шрифт'
						title='шрифт'
						onChange={handleFontFamilyChange}
					/>
					<RadioGroup
						name='fontSize'
						options={fontSizeOptions}
						selected={formInputs.fontSizeOption}
						title='размер шрифта'
						onChange={handleFontSizeChange}
					/>
					<Select
						selected={formInputs.fontColor}
						options={fontColors}
						placeholder='Выберите цвет'
						title='цвет шрифта'
						onChange={handleFontColorChange}
					/>
					<Separator />
					<Select
						selected={formInputs.backgroundColor}
						options={backgroundColors}
						placeholder='Выберите цвет'
						title='цвет фона'
						onChange={handleBackgroundColorChange}
					/>
					<Select
						selected={formInputs.contentWidth}
						options={contentWidthArr}
						placeholder='Выберите ширину'
						title='ширина контента'
						onChange={handleContentWidthChange}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={resetForm} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
