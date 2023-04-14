export interface FormProps<T> {
    onSubmit: (values: T) => void;
    loading?: boolean;
}
