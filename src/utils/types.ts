export type IGig = {
  title: string;
  budget: {
    minimum: number;
    maximum: number;
  };
  preview_description: string;
  status: string;
  currency: {
    code: string;
    sign: string;
  };
  time_submitted: number;
  bid_stats: {
    bid_count: number;
  };
  type: string;
  seo_url: string;
};
