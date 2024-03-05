import { v4 as uuid } from 'uuid';

import { EditorElement, ElementAttributes, ElementTypeEnum } from '@/signals/editor';

const elementFactory = <T>(type: ElementTypeEnum, attributes: ElementAttributes<T>, styles: React.CSSProperties): EditorElement<T> => {
	return {
		id: uuid(),
		children: [],
		styles,
		type,
		attributes,
	};
};

export const createElementByType = (type: ElementTypeEnum): EditorElement => {
	switch (type) {
		case ElementTypeEnum.EMAIL_ROW:
			return elementFactory(
				type,
				{},
				{
					width: '100%',
				},
			) as EditorElement<HTMLTableRowElement>;
		default:
			return elementFactory(type, {}, {});
	}
};
