/** Хуки и функции Реакт */
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

/** Компоненты */
import { App } from './components/app/App';

/** Стили */
import './styles/index.scss';

/** Создание корневого элемента */
const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
