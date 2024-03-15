export enum DeviceEnum {
	DESKTOP = 'desktop',
	MOBILE = 'mobile',
	TABLET = 'tablet',
}

export enum ElementTypeEnum {
	TEXT = 'text',
	EMAIL_ROOT = 'emailRoot',
	EMAIL_ROW = 'emailRow',
	EMAIL_CELL = 'emailCell',
	IMAGE = 'image',
	PARAGRAPH = 'paragraph',
}

export type ElementAttributes = {
	src?: string;
	text?: string;
};
export type ElementId = string;
export type ElementStyles = React.CSSProperties;

export type EditorElement = {
	id: ElementId;
	styles: ElementStyles;
	type: ElementTypeEnum;
	attributes: ElementAttributes;
	children: EditorElement[];
};
