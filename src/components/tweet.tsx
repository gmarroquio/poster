import {
  ThumbsUp,
  ArrowUpFromLine,
  Heart,
  User,
  Clipboard,
} from "lucide-react";
import { CopyButton } from "./copy-button";

export default function Tweet({ tweet }: { tweet: string }) {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4 max-w-md mx-auto">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <User className="h-10 w-10 rounded-full bg-gray-200" />
          </div>
          <div>
            <div className="flex justify-between">
              <div className="flex items-center space-x-1">
                <p className="text-sm font-medium">Poster</p>
                <p className="text-gray-500 text-xs">@poster</p>
                <p className="text-gray-500 text-xs">· 2h</p>
              </div>
              <CopyButton text={tweet}>
                <Clipboard className="w-4 h-4" />
              </CopyButton>
            </div>
            <p className="text-sm">{tweet}</p>
            <div className="mt-2 flex justify-between text-gray-600">
              <div className="flex items-center space-x-1">
                <ArrowUpFromLine className="h-4 w-4" />
                <span className="text-xs">12</span>
              </div>
              <div className="flex items-center space-x-1">
                <ThumbsUp className="h-4 w-4" />
                <span className="text-xs">4</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="h-4 w-4" />
                <span className="text-xs">18</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
