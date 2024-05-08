"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { TransactionType } from "@/lib/types";
import { PlusSquare } from "lucide-react";
import React, { ReactNode, useState } from "react";
import { Category } from "@prisma/client";
import { cn } from "@/lib/utils";

interface Props {
    type: TransactionType;
    successCallback: (category: Category) => void;
    trigger?: ReactNode;
}

function CreateCategoryDialog({ type, successCallback, trigger }: Props) {
    const [open, setOpen] = useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {trigger ? (
                    trigger
                ) : (
                    <Button
                        variant={"ghost"}
                        className="flex border-separate items-center justify-start roudned-none border-b px-3 py-3 text-muted-foreground"
                    >
                        <PlusSquare className="mr-2 h-4 w-4" />
                        Create new
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Create
                        <span
                            className={cn(
                                "m-1",
                                type === "income" ? "text-emerald-500" : "text-red-500"
                            )}
                        >
                            {type}
                        </span>
                        category
                    </DialogTitle>
                    <DialogDescription>
                        Categories are used to group your transactions
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button
                            type="button"
                            variant={"secondary"}
                        >
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button >
                        Create
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default CreateCategoryDialog;