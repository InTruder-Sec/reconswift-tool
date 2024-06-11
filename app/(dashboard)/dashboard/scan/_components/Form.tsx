"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { fetchScans } from "./PendingScans";

const formSchema = z.object({
  url: z.string().url(),
  scanType: z.string(),
});

export function ProfileForm(props: any) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
      scanType: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast.loading("Adding scan to queue...");
    console.log(values, "values")
    let res = await fetch("/api/v1/newscan", {
      method: "POST",
      body: JSON.stringify(values),
    });
    console.log(res)
    const body = await res.json();
    if (res.status === 200) {
      console.log(body.data);
      try {
      const addtoqueue = await fetch(
        `https://13.233.45.193:80/api/v1/scanqueue?id=${body.data._id}`,
        {
          method: "GET",
        }
      );
      if (addtoqueue.status === 200) {
        toast.success("Scan added to queue! A scan takes 5-10 minutes to complete once started. Sit back and relax!");
        // useEffect(() => {
          fetchScans(props.setdata, props.setisLoading);
        // })
      } 
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong! Please try again.");
    }
      
    } else {
      toast.error(body.message);
    }

    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-6">
        <div className="flex w-full">
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Target URL:</FormLabel>
                <FormControl>
                  <Input placeholder="https://google.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            onClick={() => {
              form.handleSubmit(onSubmit);
            }}
            className="w-fit mt-[33px] p-2 px-4 bg-black text-white hover:bg-gray-800 text-sm duration-800 cursor-pointer rounded-md ml-2"
          >
            Submit
          </Button>
        </div>
        <FormField
          control={form.control}
          name="scanType"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Scan Type:</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  {...field}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select one type!" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select one type...</SelectLabel>
                      <SelectItem value="Quick Scan">Quick Scan</SelectItem>
                      <SelectItem value="Full Scan">Full Scan</SelectItem>
                      <SelectItem value="Advanced Scan">
                        Advanced Scan
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <div className="w-full">
          <div className="py-2 mt[-15px] text-sm mr-4 font-medium">
            Schedule Scan:
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select schedule time!" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className="pl-1">
                  Only avaliable for Reconswift pro users!
                </SelectLabel>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </form>
    </Form>
  );
}
