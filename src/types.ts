export interface IAsset {
  id: number;
  url: string;
  x: number;
  y: number;
  width: number;
  height: number;
  type: 'image' | 'video';
  playing: boolean;
}

export interface IAssetComponentProps {
  asset: IAsset;
  onResize: (id: number, size: { width: number; height: number }) => void;
  onDrag: (id: number, position: { x: number; y: number }) => void;
  onRemove: (id: number) => void;
}
