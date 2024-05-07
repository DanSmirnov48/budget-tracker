"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { TransactionType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";

import React from "react";

interface Props {
    trigger: ReactNode;
    type: TransactionType;
}

function CreateTransactionDialog({ trigger, type }: Props) {
    const [open, setOpen] = useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Create a new{" "}
                        <span
                            className={cn(
                                "m-1",
                                type === "income" ? "text-emerald-500" : "text-red-500"
                            )}
                        >
                            {type}
                        </span>
                        transaction
                    </DialogTitle>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default CreateTransactionDialog;