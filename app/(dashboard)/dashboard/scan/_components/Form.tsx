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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
      scanType: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.scanType == "") {
      toast.error("Please select a scan type.");
      return;
    }
    if (
      values.scanType === "Full Scan" ||
      values.scanType === "Advanced Scan"
    ) {
      toast.info(
        "Full Scan and Advanced Scan is currently disabled. Please select Quick Scan for now."
      );
      return;
    }
    const urlRegex = new RegExp(
      "^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w\\.-]*)*\\/?$"
    );
    if (!urlRegex.test(values.url)) {
      toast.error("Please enter a valid URL.");
      return;
    }
    toast.loading("Adding scan to queue...");

    console.log(values, "values");
    let res = await fetch("/api/v1/newscan", {
      method: "POST",
      body: JSON.stringify(values),
    });
    console.log(res);
    const body = await res.json();
    if (res.status === 200) {
      try {
        let addtoqueue = await fetch("/api/v1/startscan", {
          method: "POST",
          body: JSON.stringify({ scanId: body.data.scanId }),
        });
        if (addtoqueue.status === 200) {
          toast.success(
            "Scan added to queue! Checkout history tab for status."
          );
          fetchScans(props.setdata, props.setisLoading);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong! Please try again.");
        // Update scan as failed
        let res = await fetch("/api/v1/failedscan", {
          method: "POST",
          body: JSON.stringify({ scanId: body.data.scanId }),
        });
      }
    } else {
      toast.error(body.message);
    }

    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex w-full">
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Target URL:</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
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
        {/* <div className="w-full">
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
        </div> */}
        <div className="w-full flex justify-end">
          <Button
            type="submit"
            onClick={() => {
              form.handleSubmit(onSubmit);
            }}
            className="p-2 px-4 bg-reconswiftThemeColor dark:bg-reconswiftThemeColorDark hover:bg-reconswiftThemeColorSecondary dark:hover:bg-reconswiftThemeColorDarkSecondary"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
