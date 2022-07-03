export const delay = (ms: number = 1000) => new Promise(resolve => setTimeout(resolve, ms));

export const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);