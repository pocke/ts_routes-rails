/* This is generated by ts_routes-rails */

export type ScalarType = string | number | boolean;

function $buildOptions(options: any, names: string[]): string {
  if (options) {
    let anchor = "";
    const q = [] as string[];
    for (const key of Object.keys(options)) {
      if (names.indexOf(key) !== -1) {
        // the key is already consumed
        continue;
      }

      const value = options[key];

      if (key === "anchor") {
        anchor = `#${$encode(value)}`;
      } else {
        $buildQuery(q, key, value);
      }
    }
    return (q.length > 0 ? "?" + q.join("&") : "") + anchor;
  } else {
    return "";
  }
}

function $buildQuery(q: string[], key: string, value: any) {
  if ($isScalarType(value)) {
    q.push(`${$encode(key)}=${$encode(value)}`);
  } else if (Array.isArray(value)) {
    for (const v of value) {
      $buildQuery(q, `${key}[]`, v);
    }
  } else if ($isNotNull(value)) {
    // i.e. non-null, non-scalar, non-array type
    for (const k of Object.keys(value)) {
      $buildQuery(q, `${key}[${k}]`, value[k]);
    }
  }
}

function $encode(value: any): string {
  return encodeURIComponent(value);
}

function $isNotNull(value: any): boolean {
  return value !== undefined && value !== null;
}

function $isScalarType(value: any): value is ScalarType {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  );
}

function $isPresent(value: any): boolean {
  return $isNotNull(value) && ("" + value).length > 0;
}

function $hasPresentOwnProperty(options: any, key: string): boolean {
  return options && options.hasOwnProperty(key) && $isPresent(options[key]);
}
