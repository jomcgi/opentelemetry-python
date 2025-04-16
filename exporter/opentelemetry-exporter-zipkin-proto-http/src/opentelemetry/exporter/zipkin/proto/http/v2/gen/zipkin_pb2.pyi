# @generated by generate_proto_mypy_stubs.py.  Do not edit!
import sys
from google.protobuf.descriptor import (
    Descriptor as google___protobuf___descriptor___Descriptor,
    EnumDescriptor as google___protobuf___descriptor___EnumDescriptor,
    FileDescriptor as google___protobuf___descriptor___FileDescriptor,
)

from google.protobuf.internal.containers import (
    RepeatedCompositeFieldContainer as google___protobuf___internal___containers___RepeatedCompositeFieldContainer,
)

from google.protobuf.message import (
    Message as google___protobuf___message___Message,
)

from typing import (
    Iterable as typing___Iterable,
    List as typing___List,
    Mapping as typing___Mapping,
    MutableMapping as typing___MutableMapping,
    NewType as typing___NewType,
    Optional as typing___Optional,
    Text as typing___Text,
    Tuple as typing___Tuple,
    Union as typing___Union,
    cast as typing___cast,
)

from typing_extensions import (
    Literal as typing_extensions___Literal,
)


builtin___bool = bool
builtin___bytes = bytes
builtin___float = float
builtin___int = int
builtin___str = str


DESCRIPTOR: google___protobuf___descriptor___FileDescriptor = ...

class Span(google___protobuf___message___Message):
    DESCRIPTOR: google___protobuf___descriptor___Descriptor = ...
    KindValue = typing___NewType('KindValue', builtin___int)
    type___KindValue = KindValue
    class Kind(object):
        DESCRIPTOR: google___protobuf___descriptor___EnumDescriptor = ...
        @classmethod
        def Name(cls, number: builtin___int) -> builtin___str: ...
        @classmethod
        def Value(cls, name: builtin___str) -> Span.KindValue: ...
        @classmethod
        def keys(cls) -> typing___List[builtin___str]: ...
        @classmethod
        def values(cls) -> typing___List[Span.KindValue]: ...
        @classmethod
        def items(cls) -> typing___List[typing___Tuple[builtin___str, Span.KindValue]]: ...
        SPAN_KIND_UNSPECIFIED = typing___cast(Span.KindValue, 0)
        CLIENT = typing___cast(Span.KindValue, 1)
        SERVER = typing___cast(Span.KindValue, 2)
        PRODUCER = typing___cast(Span.KindValue, 3)
        CONSUMER = typing___cast(Span.KindValue, 4)
    SPAN_KIND_UNSPECIFIED = typing___cast(Span.KindValue, 0)
    CLIENT = typing___cast(Span.KindValue, 1)
    SERVER = typing___cast(Span.KindValue, 2)
    PRODUCER = typing___cast(Span.KindValue, 3)
    CONSUMER = typing___cast(Span.KindValue, 4)
    type___Kind = Kind

    class TagsEntry(google___protobuf___message___Message):
        DESCRIPTOR: google___protobuf___descriptor___Descriptor = ...
        key: typing___Text = ...
        value: typing___Text = ...

        def __init__(self,
            *,
            key : typing___Optional[typing___Text] = None,
            value : typing___Optional[typing___Text] = None,
            ) -> None: ...
        if sys.version_info >= (3,):
            @classmethod
            def FromString(cls, s: builtin___bytes) -> Span.TagsEntry: ...
        else:
            @classmethod
            def FromString(cls, s: typing___Union[builtin___bytes, builtin___buffer, builtin___unicode]) -> Span.TagsEntry: ...
        def ClearField(self, field_name: typing_extensions___Literal[u"key",b"key",u"value",b"value"]) -> None: ...
    type___TagsEntry = TagsEntry

    trace_id: builtin___bytes = ...
    parent_id: builtin___bytes = ...
    id: builtin___bytes = ...
    kind: type___Span.KindValue = ...
    name: typing___Text = ...
    timestamp: builtin___int = ...
    duration: builtin___int = ...
    debug: builtin___bool = ...
    shared: builtin___bool = ...

    @property
    def local_endpoint(self) -> type___Endpoint: ...

    @property
    def remote_endpoint(self) -> type___Endpoint: ...

    @property
    def annotations(self) -> google___protobuf___internal___containers___RepeatedCompositeFieldContainer[type___Annotation]: ...

    @property
    def tags(self) -> typing___MutableMapping[typing___Text, typing___Text]: ...

    def __init__(self,
        *,
        trace_id : typing___Optional[builtin___bytes] = None,
        parent_id : typing___Optional[builtin___bytes] = None,
        id : typing___Optional[builtin___bytes] = None,
        kind : typing___Optional[type___Span.KindValue] = None,
        name : typing___Optional[typing___Text] = None,
        timestamp : typing___Optional[builtin___int] = None,
        duration : typing___Optional[builtin___int] = None,
        local_endpoint : typing___Optional[type___Endpoint] = None,
        remote_endpoint : typing___Optional[type___Endpoint] = None,
        annotations : typing___Optional[typing___Iterable[type___Annotation]] = None,
        tags : typing___Optional[typing___Mapping[typing___Text, typing___Text]] = None,
        debug : typing___Optional[builtin___bool] = None,
        shared : typing___Optional[builtin___bool] = None,
        ) -> None: ...
    if sys.version_info >= (3,):
        @classmethod
        def FromString(cls, s: builtin___bytes) -> Span: ...
    else:
        @classmethod
        def FromString(cls, s: typing___Union[builtin___bytes, builtin___buffer, builtin___unicode]) -> Span: ...
    def HasField(self, field_name: typing_extensions___Literal[u"local_endpoint",b"local_endpoint",u"remote_endpoint",b"remote_endpoint"]) -> builtin___bool: ...
    def ClearField(self, field_name: typing_extensions___Literal[u"annotations",b"annotations",u"debug",b"debug",u"duration",b"duration",u"id",b"id",u"kind",b"kind",u"local_endpoint",b"local_endpoint",u"name",b"name",u"parent_id",b"parent_id",u"remote_endpoint",b"remote_endpoint",u"shared",b"shared",u"tags",b"tags",u"timestamp",b"timestamp",u"trace_id",b"trace_id"]) -> None: ...
type___Span = Span

class Endpoint(google___protobuf___message___Message):
    DESCRIPTOR: google___protobuf___descriptor___Descriptor = ...
    service_name: typing___Text = ...
    ipv4: builtin___bytes = ...
    ipv6: builtin___bytes = ...
    port: builtin___int = ...

    def __init__(self,
        *,
        service_name : typing___Optional[typing___Text] = None,
        ipv4 : typing___Optional[builtin___bytes] = None,
        ipv6 : typing___Optional[builtin___bytes] = None,
        port : typing___Optional[builtin___int] = None,
        ) -> None: ...
    if sys.version_info >= (3,):
        @classmethod
        def FromString(cls, s: builtin___bytes) -> Endpoint: ...
    else:
        @classmethod
        def FromString(cls, s: typing___Union[builtin___bytes, builtin___buffer, builtin___unicode]) -> Endpoint: ...
    def ClearField(self, field_name: typing_extensions___Literal[u"ipv4",b"ipv4",u"ipv6",b"ipv6",u"port",b"port",u"service_name",b"service_name"]) -> None: ...
type___Endpoint = Endpoint

class Annotation(google___protobuf___message___Message):
    DESCRIPTOR: google___protobuf___descriptor___Descriptor = ...
    timestamp: builtin___int = ...
    value: typing___Text = ...

    def __init__(self,
        *,
        timestamp : typing___Optional[builtin___int] = None,
        value : typing___Optional[typing___Text] = None,
        ) -> None: ...
    if sys.version_info >= (3,):
        @classmethod
        def FromString(cls, s: builtin___bytes) -> Annotation: ...
    else:
        @classmethod
        def FromString(cls, s: typing___Union[builtin___bytes, builtin___buffer, builtin___unicode]) -> Annotation: ...
    def ClearField(self, field_name: typing_extensions___Literal[u"timestamp",b"timestamp",u"value",b"value"]) -> None: ...
type___Annotation = Annotation

class ListOfSpans(google___protobuf___message___Message):
    DESCRIPTOR: google___protobuf___descriptor___Descriptor = ...

    @property
    def spans(self) -> google___protobuf___internal___containers___RepeatedCompositeFieldContainer[type___Span]: ...

    def __init__(self,
        *,
        spans : typing___Optional[typing___Iterable[type___Span]] = None,
        ) -> None: ...
    if sys.version_info >= (3,):
        @classmethod
        def FromString(cls, s: builtin___bytes) -> ListOfSpans: ...
    else:
        @classmethod
        def FromString(cls, s: typing___Union[builtin___bytes, builtin___buffer, builtin___unicode]) -> ListOfSpans: ...
    def ClearField(self, field_name: typing_extensions___Literal[u"spans",b"spans"]) -> None: ...
type___ListOfSpans = ListOfSpans

class ReportResponse(google___protobuf___message___Message):
    DESCRIPTOR: google___protobuf___descriptor___Descriptor = ...

    def __init__(self,
        ) -> None: ...
    if sys.version_info >= (3,):
        @classmethod
        def FromString(cls, s: builtin___bytes) -> ReportResponse: ...
    else:
        @classmethod
        def FromString(cls, s: typing___Union[builtin___bytes, builtin___buffer, builtin___unicode]) -> ReportResponse: ...
type___ReportResponse = ReportResponse
