import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const TaskCard: React.FC<{ data: string }> = ({ data }) => {
  return (
    <div>
      <div>
        <Card className="w-full rounded-none p-3">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>Prepared quote for {data.preparedFor}</p>
          </div>
          <p className="ml-12">{data.description}</p>{" "}
          <div>
            <div className="flex flex-wrap mt-4">
              <div className="w-full md:w-1/2 lg:w-1/3 border border-gray-300 p-4">
                <p className="ml-3">Reminder</p>
                <span>
                  <Select defaultValue={data.reminder}>
                    <SelectTrigger className="w-[180px] border-none">
                      <SelectValue placeholder="Select a reminder" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="noneReminder">
                          No Reminder
                        </SelectItem>
                        <SelectItem value="oneHReminder">
                          One Hour reminder
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </span>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 border border-gray-300 p-4">
                <p className="ml-3">Task Priority</p>
                <span>
                  <Select defaultValue={data.task}>
                    <SelectTrigger className="w-[180px] border-none">
                      <SelectValue placeholder="Select a Task Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="high">
                          <span className=" flex items-center">
                            <span className=" left-0 inline-flex h-5 w-5 rounded-full bg-red-400 mr-2" />
                            <p className="text-slate-400">High</p>
                          </span>
                        </SelectItem>
                        <SelectItem value="low">
                          <span className=" flex items-center">
                            <span className=" left-0 inline-flex h-5 w-5 rounded-full bg-green-400 mr-2" />
                            <p className="text-slate-400">Low</p>
                          </span>
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </span>
              </div>
              <div className="w-full md:w-full lg:w-1/3 border border-gray-300 p-4">
                <p className="ml-3">Assign To</p>
                <Select defaultValue={data.user}>
                  <SelectTrigger className="w-[180px] border-none">
                    <SelectValue placeholder="Select a User" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="lucy">Lucy Lockwood</SelectItem>
                      <SelectItem value="im">Iron Man</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TaskCard;
