export type categoryType = {
  _id: string;
  name: string;
  slug: string;
  photo: string;
  isRoot: boolean;
  isLeaf: boolean;
  isDeleted: boolean;
  subCategories: categoryType[];
};

export interface CategoryItemProps {
  category: categoryType;
  isOpen: boolean;
  toggle: (key: string) => void;
  parentKey: string;
  openStates: any;
}
