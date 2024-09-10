/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

/** Типы пропсов кнопки открытия/закрытия */
export type TArrowButtonProps = {
	onClick?: OnClick;
	isOpened?: boolean;
};
