import React from 'react';
import { FormProps } from '../interfaces/form';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Input, Textarea, Button, createStyles } from '@mantine/core';
import { FormLabel } from '../../view/components/Forms/FormLabel';
import { TicketWithoutId, ticketValidator } from '../../data/models/Ticket';
import { yupResolver } from '@hookform/resolvers/yup';

const useStyles = createStyles((theme) => ({
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
    },
}));

const defaultValues: TicketWithoutId = {
    email: '',
    title: '',
    description: '',
    price: 0,
    amount: 1,
    supplier: '',
};

export const AddTicketsForm = ({ onSubmit }: FormProps<TicketWithoutId>) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<TicketWithoutId>({ resolver: yupResolver(ticketValidator), defaultValues });
    const { classes } = useStyles();

    return (
        <Grid>
            <Grid.Col span={12}>
                <Controller
                    name="email"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Email</FormLabel>
                                <Input onChange={onChange} value={value} name={name} />
                                <p className={classes.errorText}>{errors.email?.message}</p>
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={12}>
                <Controller
                    name="title"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Title</FormLabel>
                                <Input onChange={onChange} value={value} name={name} />
                                <p className={classes.errorText}>{errors.title?.message}</p>
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={12}>
                <Controller
                    name="description"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Description</FormLabel>
                                <Textarea onChange={onChange} value={value} name={name} />
                                <p className={classes.errorText}>{errors.description?.message}</p>
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={6}>
                <Controller
                    name="price"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Price</FormLabel>
                                <Input
                                    type="number"
                                    onChange={onChange}
                                    value={value}
                                    name={name}
                                />
                                <p className={classes.errorText}>{errors.price?.message}</p>
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={6}>
                <Controller
                    name="amount"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Amount of tickets</FormLabel>
                                <Input
                                    type="number"
                                    onChange={onChange}
                                    value={value}
                                    name={name}
                                />
                                <p className={classes.errorText}>{errors.amount?.message}</p>
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={12}>
                <Controller
                    name="supplier"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Supplier</FormLabel>
                                <Input onChange={onChange} value={value} name={name} />
                                <p className={classes.errorText}>{errors.supplier?.message}</p>
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={12} className={classes.buttonContainer}>
                <Button onClick={handleSubmit(onSubmit)}>Add tickets</Button>
            </Grid.Col>
        </Grid>
    );
};
