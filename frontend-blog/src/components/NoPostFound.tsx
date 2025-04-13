import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileX2 } from "lucide-react";
import { useNavigate } from "react-router";

const NoPostFound = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-4">
      <Card className="w-full text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <FileX2 className="h-10 w-10 text-muted-foreground" />
          </div>
          <CardTitle className="text-xl">No Posts Found</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-6">
            It looks like there are no blog posts available at the moment.
            Please check back later or explore other sections.
          </p>
          <Button onClick={() => navigate("/")} className="w-full">
            Go Back Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoPostFound;
