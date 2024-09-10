import { useEffect } from 'react';
import { TCloseFormHook } from './types';

export const useCloseArticleParamsFrom = ({
	onClose,
	isOpened,
	ref,
}: TCloseFormHook) => {
	/** Функция обработки клика вне модального окна */
	const handleOutsideClick = (e: MouseEvent) => {
		if (
			e.target instanceof Node &&
			!ref.current?.contains(e.target) &&
			isOpened
		)
			onClose?.();
	};

	/** Функция закрытия модальнго окна по Escape */
	const handleEscapeClick = (e: KeyboardEvent) => {
		if (e.key === 'Escape' && isOpened) onClose?.();
	};

	useEffect(() => {
		/** Если окно не открыто, useEffect прекращает работу */
		if (!isOpened) return;

		/** Вешаем обработчики событий закрытия окна */
		window.addEventListener('keydown', handleEscapeClick);
		window.addEventListener('mousedown', handleOutsideClick);

		/** Удаляем обработчики при амаунте */
		return () => {
			window.removeEventListener('keydown', handleEscapeClick);
			window.removeEventListener('mousedown', handleOutsideClick);
		};
	}, [isOpened, onClose]);
};
