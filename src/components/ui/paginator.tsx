"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { generatePaginationLinks } from "./generate-pages";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginatorProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  showPreviousNext: boolean;
};

export default function Paginator({
  currentPage,
  totalPages,
  onPageChange,
  showPreviousNext,
}: PaginatorProps) {
  return (
    <Pagination>
      <PaginationContent>
        {showPreviousNext && totalPages ? (
          <PaginationItem>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage - 1 < 1}
            >
              {" "}
              <ChevronLeft className="h-6 w-6" />
            </button>
          </PaginationItem>
        ) : null}
        {generatePaginationLinks(currentPage, totalPages, onPageChange)}
        {showPreviousNext && totalPages ? (
          <PaginationItem>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage > totalPages - 1}
            >
              {" "}
              <ChevronRight className="h-6 w-6" />
            </button>
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
}
